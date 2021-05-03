import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3682Component } from './test-component3682.component';

describe('TestComponent3682Component', () => {
  let component: TestComponent3682Component;
  let fixture: ComponentFixture<TestComponent3682Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3682Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
