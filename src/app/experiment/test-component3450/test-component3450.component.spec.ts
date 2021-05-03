import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3450Component } from './test-component3450.component';

describe('TestComponent3450Component', () => {
  let component: TestComponent3450Component;
  let fixture: ComponentFixture<TestComponent3450Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3450Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
