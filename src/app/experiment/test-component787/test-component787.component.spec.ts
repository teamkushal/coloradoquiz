import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent787Component } from './test-component787.component';

describe('TestComponent787Component', () => {
  let component: TestComponent787Component;
  let fixture: ComponentFixture<TestComponent787Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent787Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
