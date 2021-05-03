import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3031Component } from './test-component3031.component';

describe('TestComponent3031Component', () => {
  let component: TestComponent3031Component;
  let fixture: ComponentFixture<TestComponent3031Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3031Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
