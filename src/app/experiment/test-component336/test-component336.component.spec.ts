import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent336Component } from './test-component336.component';

describe('TestComponent336Component', () => {
  let component: TestComponent336Component;
  let fixture: ComponentFixture<TestComponent336Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent336Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
