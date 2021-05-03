import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3531Component } from './test-component3531.component';

describe('TestComponent3531Component', () => {
  let component: TestComponent3531Component;
  let fixture: ComponentFixture<TestComponent3531Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3531Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
