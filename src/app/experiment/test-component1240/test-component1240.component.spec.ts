import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1240Component } from './test-component1240.component';

describe('TestComponent1240Component', () => {
  let component: TestComponent1240Component;
  let fixture: ComponentFixture<TestComponent1240Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1240Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
