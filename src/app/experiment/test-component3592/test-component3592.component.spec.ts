import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3592Component } from './test-component3592.component';

describe('TestComponent3592Component', () => {
  let component: TestComponent3592Component;
  let fixture: ComponentFixture<TestComponent3592Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3592Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
