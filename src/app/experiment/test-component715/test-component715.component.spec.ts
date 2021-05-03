import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent715Component } from './test-component715.component';

describe('TestComponent715Component', () => {
  let component: TestComponent715Component;
  let fixture: ComponentFixture<TestComponent715Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent715Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
