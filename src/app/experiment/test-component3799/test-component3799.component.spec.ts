import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3799Component } from './test-component3799.component';

describe('TestComponent3799Component', () => {
  let component: TestComponent3799Component;
  let fixture: ComponentFixture<TestComponent3799Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3799Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
