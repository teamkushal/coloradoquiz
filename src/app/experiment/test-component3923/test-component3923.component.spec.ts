import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3923Component } from './test-component3923.component';

describe('TestComponent3923Component', () => {
  let component: TestComponent3923Component;
  let fixture: ComponentFixture<TestComponent3923Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3923Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
