import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1869Component } from './test-component1869.component';

describe('TestComponent1869Component', () => {
  let component: TestComponent1869Component;
  let fixture: ComponentFixture<TestComponent1869Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1869Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
