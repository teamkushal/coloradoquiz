import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3716Component } from './test-component3716.component';

describe('TestComponent3716Component', () => {
  let component: TestComponent3716Component;
  let fixture: ComponentFixture<TestComponent3716Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3716Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
