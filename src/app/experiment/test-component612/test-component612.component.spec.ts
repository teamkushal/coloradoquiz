import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent612Component } from './test-component612.component';

describe('TestComponent612Component', () => {
  let component: TestComponent612Component;
  let fixture: ComponentFixture<TestComponent612Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent612Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
