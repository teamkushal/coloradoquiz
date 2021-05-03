import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3633Component } from './test-component3633.component';

describe('TestComponent3633Component', () => {
  let component: TestComponent3633Component;
  let fixture: ComponentFixture<TestComponent3633Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3633Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
