import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3337Component } from './test-component3337.component';

describe('TestComponent3337Component', () => {
  let component: TestComponent3337Component;
  let fixture: ComponentFixture<TestComponent3337Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3337Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
