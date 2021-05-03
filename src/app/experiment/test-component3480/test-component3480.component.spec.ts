import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3480Component } from './test-component3480.component';

describe('TestComponent3480Component', () => {
  let component: TestComponent3480Component;
  let fixture: ComponentFixture<TestComponent3480Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3480Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
