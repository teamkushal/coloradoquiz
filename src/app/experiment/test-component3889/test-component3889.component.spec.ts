import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3889Component } from './test-component3889.component';

describe('TestComponent3889Component', () => {
  let component: TestComponent3889Component;
  let fixture: ComponentFixture<TestComponent3889Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3889Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
