import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3363Component } from './test-component3363.component';

describe('TestComponent3363Component', () => {
  let component: TestComponent3363Component;
  let fixture: ComponentFixture<TestComponent3363Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3363Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
