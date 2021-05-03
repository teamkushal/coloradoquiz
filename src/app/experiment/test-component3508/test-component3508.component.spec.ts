import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3508Component } from './test-component3508.component';

describe('TestComponent3508Component', () => {
  let component: TestComponent3508Component;
  let fixture: ComponentFixture<TestComponent3508Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3508Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
