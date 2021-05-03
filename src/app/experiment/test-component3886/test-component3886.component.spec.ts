import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3886Component } from './test-component3886.component';

describe('TestComponent3886Component', () => {
  let component: TestComponent3886Component;
  let fixture: ComponentFixture<TestComponent3886Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3886Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
