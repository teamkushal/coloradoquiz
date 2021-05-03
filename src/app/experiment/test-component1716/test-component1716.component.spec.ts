import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1716Component } from './test-component1716.component';

describe('TestComponent1716Component', () => {
  let component: TestComponent1716Component;
  let fixture: ComponentFixture<TestComponent1716Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1716Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
