import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3254Component } from './test-component3254.component';

describe('TestComponent3254Component', () => {
  let component: TestComponent3254Component;
  let fixture: ComponentFixture<TestComponent3254Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3254Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
