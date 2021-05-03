import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3194Component } from './test-component3194.component';

describe('TestComponent3194Component', () => {
  let component: TestComponent3194Component;
  let fixture: ComponentFixture<TestComponent3194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3194Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
