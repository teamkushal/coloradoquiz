import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3784Component } from './test-component3784.component';

describe('TestComponent3784Component', () => {
  let component: TestComponent3784Component;
  let fixture: ComponentFixture<TestComponent3784Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3784Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
