import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3453Component } from './test-component3453.component';

describe('TestComponent3453Component', () => {
  let component: TestComponent3453Component;
  let fixture: ComponentFixture<TestComponent3453Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3453Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
