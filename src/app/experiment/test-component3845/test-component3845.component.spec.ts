import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3845Component } from './test-component3845.component';

describe('TestComponent3845Component', () => {
  let component: TestComponent3845Component;
  let fixture: ComponentFixture<TestComponent3845Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3845Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
