import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3586Component } from './test-component3586.component';

describe('TestComponent3586Component', () => {
  let component: TestComponent3586Component;
  let fixture: ComponentFixture<TestComponent3586Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3586Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
