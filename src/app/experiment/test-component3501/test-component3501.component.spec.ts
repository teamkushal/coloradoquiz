import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3501Component } from './test-component3501.component';

describe('TestComponent3501Component', () => {
  let component: TestComponent3501Component;
  let fixture: ComponentFixture<TestComponent3501Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3501Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
