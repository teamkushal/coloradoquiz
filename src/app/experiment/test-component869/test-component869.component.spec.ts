import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent869Component } from './test-component869.component';

describe('TestComponent869Component', () => {
  let component: TestComponent869Component;
  let fixture: ComponentFixture<TestComponent869Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent869Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
