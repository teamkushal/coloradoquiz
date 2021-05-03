import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3636Component } from './test-component3636.component';

describe('TestComponent3636Component', () => {
  let component: TestComponent3636Component;
  let fixture: ComponentFixture<TestComponent3636Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3636Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
