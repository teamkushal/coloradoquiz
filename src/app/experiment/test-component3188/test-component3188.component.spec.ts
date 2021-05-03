import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3188Component } from './test-component3188.component';

describe('TestComponent3188Component', () => {
  let component: TestComponent3188Component;
  let fixture: ComponentFixture<TestComponent3188Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3188Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
