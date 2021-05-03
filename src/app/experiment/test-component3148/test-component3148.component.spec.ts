import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3148Component } from './test-component3148.component';

describe('TestComponent3148Component', () => {
  let component: TestComponent3148Component;
  let fixture: ComponentFixture<TestComponent3148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
