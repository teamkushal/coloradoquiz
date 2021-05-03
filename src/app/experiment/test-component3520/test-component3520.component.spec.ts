import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3520Component } from './test-component3520.component';

describe('TestComponent3520Component', () => {
  let component: TestComponent3520Component;
  let fixture: ComponentFixture<TestComponent3520Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3520Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
