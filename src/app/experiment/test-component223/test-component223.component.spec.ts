import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent223Component } from './test-component223.component';

describe('TestComponent223Component', () => {
  let component: TestComponent223Component;
  let fixture: ComponentFixture<TestComponent223Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent223Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
