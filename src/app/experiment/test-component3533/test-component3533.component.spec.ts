import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3533Component } from './test-component3533.component';

describe('TestComponent3533Component', () => {
  let component: TestComponent3533Component;
  let fixture: ComponentFixture<TestComponent3533Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3533Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
