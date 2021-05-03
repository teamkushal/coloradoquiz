import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3568Component } from './test-component3568.component';

describe('TestComponent3568Component', () => {
  let component: TestComponent3568Component;
  let fixture: ComponentFixture<TestComponent3568Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3568Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
