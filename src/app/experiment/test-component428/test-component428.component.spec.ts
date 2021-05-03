import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent428Component } from './test-component428.component';

describe('TestComponent428Component', () => {
  let component: TestComponent428Component;
  let fixture: ComponentFixture<TestComponent428Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent428Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
