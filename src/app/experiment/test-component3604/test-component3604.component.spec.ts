import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3604Component } from './test-component3604.component';

describe('TestComponent3604Component', () => {
  let component: TestComponent3604Component;
  let fixture: ComponentFixture<TestComponent3604Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3604Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
