import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1285Component } from './test-component1285.component';

describe('TestComponent1285Component', () => {
  let component: TestComponent1285Component;
  let fixture: ComponentFixture<TestComponent1285Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1285Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
