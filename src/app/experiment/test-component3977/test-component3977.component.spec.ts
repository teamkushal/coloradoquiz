import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3977Component } from './test-component3977.component';

describe('TestComponent3977Component', () => {
  let component: TestComponent3977Component;
  let fixture: ComponentFixture<TestComponent3977Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3977Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
