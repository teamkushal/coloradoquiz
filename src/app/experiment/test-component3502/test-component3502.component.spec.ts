import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3502Component } from './test-component3502.component';

describe('TestComponent3502Component', () => {
  let component: TestComponent3502Component;
  let fixture: ComponentFixture<TestComponent3502Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3502Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
