import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3062Component } from './test-component3062.component';

describe('TestComponent3062Component', () => {
  let component: TestComponent3062Component;
  let fixture: ComponentFixture<TestComponent3062Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3062Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
