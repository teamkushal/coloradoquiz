import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent631Component } from './test-component631.component';

describe('TestComponent631Component', () => {
  let component: TestComponent631Component;
  let fixture: ComponentFixture<TestComponent631Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent631Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
