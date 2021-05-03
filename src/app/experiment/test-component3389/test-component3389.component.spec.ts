import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3389Component } from './test-component3389.component';

describe('TestComponent3389Component', () => {
  let component: TestComponent3389Component;
  let fixture: ComponentFixture<TestComponent3389Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3389Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
