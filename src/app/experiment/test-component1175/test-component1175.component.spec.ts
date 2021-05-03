import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1175Component } from './test-component1175.component';

describe('TestComponent1175Component', () => {
  let component: TestComponent1175Component;
  let fixture: ComponentFixture<TestComponent1175Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1175Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
