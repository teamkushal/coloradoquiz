import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3092Component } from './test-component3092.component';

describe('TestComponent3092Component', () => {
  let component: TestComponent3092Component;
  let fixture: ComponentFixture<TestComponent3092Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3092Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
