import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3514Component } from './test-component3514.component';

describe('TestComponent3514Component', () => {
  let component: TestComponent3514Component;
  let fixture: ComponentFixture<TestComponent3514Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3514Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
