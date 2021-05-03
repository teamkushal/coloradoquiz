import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3755Component } from './test-component3755.component';

describe('TestComponent3755Component', () => {
  let component: TestComponent3755Component;
  let fixture: ComponentFixture<TestComponent3755Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3755Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
