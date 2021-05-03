import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3372Component } from './test-component3372.component';

describe('TestComponent3372Component', () => {
  let component: TestComponent3372Component;
  let fixture: ComponentFixture<TestComponent3372Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3372Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
