import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3392Component } from './test-component3392.component';

describe('TestComponent3392Component', () => {
  let component: TestComponent3392Component;
  let fixture: ComponentFixture<TestComponent3392Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3392Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
