import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3073Component } from './test-component3073.component';

describe('TestComponent3073Component', () => {
  let component: TestComponent3073Component;
  let fixture: ComponentFixture<TestComponent3073Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3073Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
