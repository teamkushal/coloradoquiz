import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2869Component } from './test-component2869.component';

describe('TestComponent2869Component', () => {
  let component: TestComponent2869Component;
  let fixture: ComponentFixture<TestComponent2869Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2869Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
